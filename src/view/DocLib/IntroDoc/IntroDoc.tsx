import React from "react";
import './style.scss'


const IntroDoc: React.FC = () => {


  return (
    <div className="doc-intro">
      <h1>TING UI 介绍</h1>
      <p>
        TING UI 是基于React开发的模仿英雄联盟UI的组件库，由<a href="https://github.com/TINGCYGF">Ting</a>使用<code>React</code><code>typescript</code>搭建。TING UI 框架仅用于个人学习<code>React</code>，请勿用于生产环境！请勿用于商业行为！欢迎各位与作者 <a href="https://github.com/TINGCYGF">Ting</a>交流学习
      </p>
      <p><strong>声明：</strong>由于TING UI用了部分英雄联盟素材，版权原因不发布npm包。仅用于交流与学习，若有侵权行为立即删除！</p>
      <p className="ps"><strong>PS：</strong>该文档网页适配<strong>移动端</strong>和<strong>PC</strong>，手机端点击<strong>左上角L</strong>查看组件列表</p>

    </div>
  )
}

export {IntroDoc}