import '../src/styles/global.css';
import * as nextImage from "next/image"

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: props => {
    const { width, height } = props
    const ratio = (height / width) * 100
    return (
     
        <img
          // style={{
          //   objectFit: "cover",
          //   minWidth: "100%",
          //   minHeight: "100%",
          //   maxWidth: "100%",
          //   maxHeight: "100%",
          // }}
          {...props}
        />
    )
  },
})
export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  )
]
