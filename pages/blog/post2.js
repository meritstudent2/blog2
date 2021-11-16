import Head from "next/head"
import Blog from "../../components/Blog"
import Image from "next/image"

export default function Post1() {
  return (
    <Blog title="hi" date="11/16/21" author="anyone">
      <p>zoooom spoook zoooom.</p>
    </Blog>
  )
}