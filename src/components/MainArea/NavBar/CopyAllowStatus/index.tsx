import CopyImg from '@/assets/images/copy.png'
import CopyActiveImg from '@/assets/images/copy-active.png'
import { getBookStore, getUIStore } from '@/store'
import { observer } from 'mobx-react-lite'
import Button from '../Button'

const CopyAllowStatus = observer(() => {
  const { isCopyAllow, changeCopyAllow } = getUIStore()

  const handleClick = () => {
    changeCopyAllow(!isCopyAllow)
  }

  return <Button url={CopyImg.src} isVariable activeUrl={CopyActiveImg.src} onClick={handleClick} />
})
export default CopyAllowStatus
