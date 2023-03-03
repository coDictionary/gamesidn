import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <section className="flex bg-gray-800 h-screen w-full">
        <div className="container-catgories py-10 px-20 w-full h-full flex flex-col gap-8">
          <h2 className="text-3xl text-white">List Categories</h2>
          <div className="list-category h-full flex flex-col w-full gap-5">
            <div className="col-50 h-1/2 w-full flex gap-10">
              <Link to={`/category/shooter`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-shooter">
                  <h4 className="card-zoom-text text-white transition">
                    Shooter
                  </h4>
                </div>
              </Link>
              <Link to={`/category/moba`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-moba">
                  <h4 className="card-zoom-text text-white transition ">
                    Moba
                  </h4>
                </div>
              </Link>
              <Link to={`/category/racing`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-racing">
                  <h4 className="card-zoom-text text-white transition">
                    Racing
                  </h4>
                </div>
              </Link>
              <Link to={`/category/sports`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-sports">
                  <h4 className="card-zoom-text text-white transition">
                    Sports
                  </h4>
                </div>
              </Link>
            </div>
            <div className="col-50 h-1/2 w-full flex gap-10">
              <Link to={`/category/strategy`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-strategy">
                  <h4 className="card-zoom-text text-white transition">
                    Strategy
                  </h4>
                </div>
              </Link>
              <Link to={`/category/action`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-action">
                  <h4 className="card-zoom-text text-white transition">
                    Action
                  </h4>
                </div>
              </Link>
              <Link to={`/category/fighting`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-fighting">
                  <h4 className="card-zoom-text text-white transition">
                    Fighting
                  </h4>
                </div>
              </Link>

              <Link to={`/category/mmorpg`} className="card ">
                <div className="container-card w-full h-full items-center justify-center flex flex-col card-zoom-image card-image-mmorpg">
                  <h4 className="card-zoom-text text-white transition">
                    MMORPG
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
