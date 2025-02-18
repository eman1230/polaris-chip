import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Lebron James";
    this.imageLink = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTL1r7KG7YYZLtkI3kbOCYzKAa4ASdPjD1zeYJNq9IV8GwHEUl2HPj7PNNPYozbgSu0K7KV7L6GBNoAKQ4";
    this.description = "All time NBA leading scorer, 4 time NBA champion. The GOAT";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        display: inline-block
      }
      :host([fancy]) .card{
        background-color: purple;
      }
      :host([fancy]) .description-text,
      :host([fancy]) .title,
      :host([fancy]) .card-text{
        color: gold;
      }
      :host([fancy]) img{
        border-color: gold;
      }
      .card {
        background-color: var(--my-card-fancy-bg, gold);
        font-size: 1em;
        display: inline-flex;
        border: 2px solid purple;
        padding: 8px;
        margin: 8px;
      }
      .description-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: purple;
        margin: 0 0 0 8px;
        overflow: auto;
      }
      .title {
        top: 0;
        background-color: transparent;
        color: purple;
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 8px;
      }
      img {
        border: 4px solid purple;
        line-height: 0%;
        width: 212px;
        height: 144px;
      }
      .card-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: purple;
        margin: 0 0 0 8px;
        overflow: auto;
      }
      
      button{
        background-color: purple;
        color: yellow;
        font-size: 16px;
        padding: 5px 12px;
        float: right;
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
  
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
  <div class="card">
    <img class="card-image" src="${this.imageLink}"/>
    <div class="card-text">
      <h3 class="card-title">${this.title}</h3>
      <!-- put this in your render method where you had details -->
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <div>
      <slot>${this.description}</slot>
      </div>
      </details>
      <div class="card-details">
        <slot>${this.description}</slot>
       <div class='btn'>             
         <a href="https://hax.psu.edu">
            <button class="btn">details</button>
         </a>
        </div>
      </div>
    </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      imageLink: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
