import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .input-style {
    max-width: 250px !important;
    margin: 10px;
  }
  .video-item{
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
  float: left;
  padding: 2% !important;
  border-top: 1px solid rgba(34,36,38,.15) !important;
}

.video-item.item img{
  max-width: 210px;
  min-height: 330px;
}

.movie-image {
  width: 300px !important;
  margin: auto;
  display: block;
  float: right;
  box-shadow: 5px 5px 5px grey;
}

.details-title{
  width: 220px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.year-div {
  width: 220px !important;
  float: left;
  color: #9f9f9f;
}

`;

export default GlobalStyle;
