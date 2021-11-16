// pages/blog/post1.js
import Blog from "../../components/Blog"

export default function Post1() {
  return (
    <Blog author="guy" date="Nobmber, 2021" title="Post 1">
      {/* Content between the tags becomes "props.children" in the component */}
      <p>mac and cheese good.</p>
    </Blog>
  )
}