import React from "react";
import Variants from "./Variants";

const Productdetails = (props) => {
  const { products, onAdd, onRemove, cartItems } = props;
  const totalPrices = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  return (
    <section class="section-content padding-y bg">
      <div class="container">
        <article class="card">
          <div class="card-body">
            <div class="row">
              <aside class="col-md-6">
                <article class="gallery-wrap">
                  <div class="card img-big-wrap">
                    <a href="#">
                      {" "}
                      <img src="https://cdn.orderchamp.com/listings/804569a7-d247-4dec-b82d-a4a781b5ecb9_700x700_fill.png?20220607083526" />
                    </a>
                  </div>
                  <div class="thumbs-wrap">
                    <a href="#" class="item-thumb">
                      {" "}
                      <img src="https://cdn.orderchamp.com/listings/54688a4a-0db2-4b85-aceb-749af0dd55da_200x200_crop.jpg?20220601034939" />
                    </a>
                    <a href="#" class="item-thumb">
                      {" "}
                      <img src="https://cdn.orderchamp.com/listings/055797af-a4c6-400d-91a2-87a7f9f19406_200x200_crop.jpg?20220601034939" />
                    </a>
                  </div>
                </article>
                <div class="row">
                  <div class="col-md-12">
                    <h5>Information</h5>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </aside>
              <main class="col-md-6">
                <article>
                  <a href="#" class="text-primary btn-link">
                    Palais - €100.00 Order minimum
                  </a>
                  <h3 class="title">Outdoor Bolster Jackie Bordeaux</h3>
                  <div>
                    <ul class="rating-stars">
                      <li class="stars-active">
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </li>
                    </ul>
                    <span class="label-rating mr-3 text-muted">7/10</span>
                    <a href="#" class="btn-link  mr-3 text-muted">
                      {" "}
                      <i class="fa fa-heart"></i> Save for later{" "}
                    </a>
                    <a href="#" class="btn-link text-muted">
                      {" "}
                      <i class="fa fa-book-open"></i> Compare{" "}
                    </a>
                  </div>

                  <hr />
                  <div class="col-12 p-1 bg-white rounded shadow-sm mb-5">
                    <div className="row">
                      <div className="col-2">
                        <h6>Quantity</h6>
                      </div>
                      <div className="col-5 pl-5">
                        <h6>Variant</h6>
                      </div>
                      <div className="col-2 pl-4">
                        <h6>Price</h6>
                      </div>
                      <div className="col-2">
                        <h6>MSRP</h6>
                      </div>
                      <div className="col-2">
                        <h6>Stock</h6>
                      </div>
                    </div>
                    {products.map((item) => (
                      <Variants
                        key={item.id}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        products={item}
                        cartItems={cartItems}
                      />
                    ))}
                  </div>
                  <div>Total €{totalPrices}</div>
                  <div class="mb-4">
                    <button
                      onClick={() => onAdd(products[0])}
                      class="btn btn-primary mr-1"
                    >
                      Add to card
                    </button>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </article>
        <article class="card mt-5">
          <div class="card-body"></div>
        </article>
      </div>
    </section>
  );
};

export default Productdetails;
