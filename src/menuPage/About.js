import React from "react";
import mentor from "../img/Mentor.jpg";
import raden from "../img/raden.jpg";
import sovann from "../img/sovann.jpg";
import metra from "../img/metra.jpg";
import peav from "../img/Cool.jpg";
import dora from "../img/dora.jpg";
import kak from "../img/kak.jpg";
import "./../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div>
      <section id="about" class="section" style={{ background: "#000" }}>
        <div class="container">
          <div class="row">
            <div class="span12">
              <div class="heading">
                <h3>
                  <span>About us</span>
                </h3>
              </div>
              <div class="sub-heading">
                <p style={{ color: "#fff" }}>
                  We are the amazing{" "}
                  <strong style={{ color: "red" }}>React Major</strong> team in
                  Korea Software HRD Center (7th) With an amazing member such as
                  :
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <img src={mentor} alt="" class="img-polaroid" />
              <div class="roles">
                <h5>
                  <strong>Mrs. Raksmey Mom</strong>
                </h5>
                <p>Mentor - Teacher</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <img src={raden} alt="" class="img-polaroid" />
              <div class="roles">
                <h5>
                  <strong>Hor Raden</strong>
                </h5>
                <p>Leader</p>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src={sovann}
                alt=""
                style={{ height: "300px" }}
                class="img-polaroid"
              />
              <div class="roles">
                <h5>
                  <strong>Vin Sovann</strong>
                </h5>
                <p>Kak Member</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="col-md-4">
              <img
                src={dora}
                alt=""
                style={{ height: "300px" }}
                class="img-polaroid"
              />
              <div class="roles">
                <h5>
                  <strong>Ny Thyatdora</strong>
                </h5>
                <p>Kak Member</p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={peav}
                alt=""
                style={{ height: "300px" }}
                class="img-polaroid"
              />
              <div class="roles">
                <h5>
                  <strong>Sok Peav</strong>
                </h5>
                <p>Kak Member</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={metra} alt="" class="img-polaroid" />
              <div class="roles">
                <h5>
                  <strong>Yim Metra</strong>
                </h5>
                <p>Kak Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
