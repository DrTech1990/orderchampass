import React from "react";

const Variants = (props) => {
  const { products, onAdd, onRemove, cartItems } = props;
  const quantity = cartItems.map((item) =>
    item.id === products.id ? item.quantity : null
  );
  return (
    <div className="block col-12">
      <div className="row">
        <div class="col-2 input-group bs-number-incrementer">
          <span class="input-group-btn">
            <button
              onClick={() => onRemove(products)}
              type="button"
              class="btn btn-default"
              data-operation="decrement"
            >
              <i class="fa fa-minus-circle" aria-hidden="true"></i>
            </button>
          </span>
          <input value={quantity} size="5" className="text-center" />
          <span class="input-group-btn">
            <button
              onClick={() => onAdd(products)}
              type="button"
              class="btn btn-default"
              data-operation="increment"
            >
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          </span>
        </div>
        <div class="col-5 p-2">
          <div class="ml-3 d-inline-block align-middle">
            <h5 class="mb-0">
              {" "}
              <a
                href="#"
                class="text-dark text-wrap d-inline-block align-middle"
              >
                {products.options[0].value} - {products.options[1].value}
              </a>
            </h5>
          </div>
        </div>
        <div className="col-2">
          <strong>€{products.price}0</strong>
        </div>
        <div className="col-2">
          <strong>€{products.msrp}</strong>
        </div>
        <div className="col-1">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Variants;
