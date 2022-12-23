import { useState } from "react"

function ArticlePreview() {
  const [shareVisibility, setShareVisibility] = useState(false)
  return (
    <div className="ArticlePreview">
      <div className="article-img">
        <img src="./drawers.jpg" alt="Drawers" />
      </div>
      <div className="article-content">
        <article>
          <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
        </article>
        <div className={`author-box ${shareVisibility? 'show-popup': ''}`}>
          <div className="author-image">
            <img src="./avatar-michelle.jpg" alt="michelle's avatar" />
          </div>
          <p className="author-name">Michelle Appleton <span>28 Jun 2020</span></p>
          <div className="share-icon" onClick={() => {setShareVisibility(!shareVisibility)}}><i className="fa-solid fa-share"></i></div>
          <div className="share-popup">
            <span>SHARE</span>
            <img src="./icon-facebook.svg" alt="share-icon" />  
            <img src="./icon-twitter.svg" alt="share-icon" />  
            <img src="./icon-pinterest.svg" alt="share-icon" />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview