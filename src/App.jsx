import React from "react";
import img from "./assets/images/image-omelette.jpeg";
import "./App.css";

function App() {
  return (
    <article className="recipe">
      <div className="recipe_img">
        <img src={img} alt="An image of an omelette" />
      </div>
      <div className="recipe_information">
        <div className="recipe_heading">
          <h1 className="recipe_title">Simple Omelette Recipe</h1>
          <p className="recipe_description">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="recipe_preparation">
          <h3 className="recipe_preparation-title">Preparation time</h3>
          <ul className="recipe_preparation-info">
            <li>
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li>
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="recipe_instructions">
          <h2 className="recipe_instructions-title">Instructions</h2>
          <ol className="recipe_instructions-info">
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan</strong>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette</strong>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional)</strong>: When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <div className="line"></div>
      </div>
    </article>
  );
}

export default App;
