import React from "react"
import { TwitterIcon, TwitterShareButton } from 'react-share'

export default function TweetButton() {
  return (
    <TwitterShareButton
      title={"おめでとうございます\nあなたは人間であることを証明しました\n\nプレイはこちらから↓\n"}
      url={"https://karakasadcfd.github.io/captcha-nazo/\n"}
      hashtags={["CAPTCHA謎"]}
    >
      <TwitterIcon size={32} round={false} />
    </TwitterShareButton>
  )
}