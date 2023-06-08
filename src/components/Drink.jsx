import React from "react";
import "../hero/drink.css";
const Drink = () => {
  return (
    <div className="drink">
      <h1>Food Near You</h1>
      <div className="grid">
        <div className="aa">
          <h4>
            Pizza <br />
            starting <br />
            Price 120
          </h4>

          <img id="a" src="src\assets\pizza small.png" alt="" />
        </div>

        <div className="b">
          <h4>
            Pizza <br />
            starting <br />
            120
          </h4>
          <img
            id="a"
            src="src\assets\20230521081137__fpdl.in__chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76969_large-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="c">
          <h4>
            Pizza <br />
            starting <br />
            120
          </h4>
          <img
            id="a"
            src="src\assets\20230521081310__fpdl.in__fresh-tasty-croissants-with-berries-white-wooden-background_70626-4275_large-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="d">
          <h4>
            Pizza <br />
            starting <br />
            120
          </h4>
          <img id="ba" src="src\assets\chikan-removebg-preview.png" alt="" />
        </div>
      </div>

      {/* <img id='cartoon' src="src\assets\20230520094019__fpdl.in__fun-3d-asian-teenager-with-manga-style_183364-16602_large-removebg-preview.png" alt="" /> */}
    </div>
  );
};

export default Drink;
