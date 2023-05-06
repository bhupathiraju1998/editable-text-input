import {useState} from 'react'
import {
  BgContainer,
  SubContainer,
  ParagraphEdit,
  ButtonSaveEdit,
  DisplayRow,
  ParagraphText,
  InputCont,
} from './styledComponents'

const EditComponent = () => {
  const [text, setText] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const handleSave = () => {
    setConfirmed(!confirmed)
  }
  const handleEdit = () => {
    setConfirmed(!confirmed)
  }
  return (
    <BgContainer>
      <SubContainer>
        <ParagraphEdit>Editable Text Input</ParagraphEdit>
        {confirmed ? (
          <DisplayRow>
            <ParagraphText>{text}</ParagraphText>
            <ButtonSaveEdit className="btn" type="button" onClick={handleEdit}>
              Edit
            </ButtonSaveEdit>
          </DisplayRow>
        ) : (
          <DisplayRow>
            {' '}
            <InputCont value={text} onChange={e => setText(e.target.value)} />
            <ButtonSaveEdit className="btn" type="button" onClick={handleSave}>
              Save
            </ButtonSaveEdit>
          </DisplayRow>
        )}
      </SubContainer>
    </BgContainer>
  )
}

export default EditComponent
