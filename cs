.blog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 240px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px 10px 170px 60px;
  width: 100%;
  max-width: 100%;
}

.blog-card {
  overflow: hidden;
  position: relative;
  width: auto;
}

.blog-card img {
  width: 100%;
}

.title {
  color: rgb(225, 14, 43);
  font-size: 14px;
  font-weight: 400;
}

.blog-title {
  color: rgb(225, 14, 43);
  font-weight: 400;
}

@media screen and (min-width: 320px) {
  .blog {
    max-width: 100%;
    align-items: start;
  }
}
@media screen and (min-width: 768px) {
  .blog {
    max-width: 1300px;
    padding: 10px 10px 170px 10px;
  }
}
hr {
  border: none;
  height: 0.8px;
  opacity: 30%;
  background-color: rgb(225, 14, 43);
  width: 320px;
  padding-left: 250px;
}

.services {
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-self: start;
}

.services-title {
  width: 700px;
  padding-left: 20px;
  font-size: 49px;
  font-weight: 400;
  color: rgb(225, 14, 43);
}

.services-right {
  width: 500px;
  padding-left: 20px;
}

.services-description {
  font-size: 18px;
  color: rgb(225, 14, 43);
  padding-bottom: 40px;
  width: 300px;
  text-align: left;
}

.service-one {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.service-two {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.service-three {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 50px;
}

.service-three h2 {
  width: 300px;
}

.small-number {
  padding-right: 20px;
  color: rgb(225, 14, 43);
}

.service-type {
  font-weight: 400;
  color: rgb(225, 14, 43);
}

.view-services {
  color: rgb(225, 14, 43);
}

.services-link {
  display: flex;
  align-items: center;
  padding: 0px 0px 160px 20px;
}

.services-link a {
  padding-right: 7px;
  text-decoration: none;
  display: inline-block;
  border-bottom: 2px solid rgb(225, 14, 43);
  line-height: 0.2;
  margin-bottom: -1px;
  font-weight: 100;
}

.services-link .bullet-point {
  color: rgb(225, 14, 43);
  font-size: 28px;
}

.services-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 40px 40px;
  width: 320px;
}

.services-image img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
}

.line-1,
.line-2,
.line-3 {
  border: none;
  height: 0.8px;
  opacity: 30%;
  background-color: rgb(225, 14, 43);
  width: 370px;
  padding-left: 250px;
}

@media screen and (min-width: 320px) {
  .services {
    flex-direction: column;
  }
  hr {
    padding: 0px;
    width: 1200px;
  }
}
@media screen and (min-width: 768px) {
  .services {
    flex-direction: row;
  }
  hr {
    padding: 0px;
    width: 1200px;
  }
  .services-right {
    padding-top: 25px;
  }
  .service-three h2 {
    width: 100%;
  }
  .services-image {
    width: 1300px;
  }
  .services-image img {
    width: 1300px;
    padding-top: 40px;
  }
  .services-description {
    font-size: 19px;
    width: 550px;
    padding-left: 0px;
    text-align: left;
  }
  .services-title {
    padding-left: 50px;
  }
  .services-link {
    padding-bottom: 160px;
  }
}
.commitments {
  padding: 20px;
}

.row-1 {
  display: flex;
  flex-direction: row;
  gap: 360px;
}

.commitments-title {
  padding-left: 20px;
  font-size: 49px;
  font-weight: 400;
  color: rgb(225, 14, 43);
}

.circle-number {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: rgb(225, 14, 43);
  background-color: transparent;
}

.circle-number::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.25;
  z-index: -1;
  background-color: transparent;
  border: 2px solid rgb(225, 14, 43);
}

.commit-title {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  color: rgb(225, 14, 43);
}

.commit-description {
  font-size: 18px;
  color: rgb(225, 14, 43);
}

.row-2 {
  display: flex;
  flex-direction: row;
  gap: 325px;
}

.commitment-two {
  padding-left: 30px;
  width: 550px;
}

.get-in-touch-container {
  float: right;
  text-align: right;
  width: 41%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 140px;
}

.get-in-touch-link {
  padding-right: 7px;
  color: rgb(225, 14, 43);
  text-decoration: none;
  display: inline-block;
  border-bottom: 2px solid rgb(225, 14, 43);
  line-height: 0.2;
  margin-bottom: -1px;
  font-weight: 100;
}

.bullet-point {
  font-size: 28px;
  color: rgb(225, 14, 43);
}

body {
  background-color: #FBF6EE;
  font-family: "Poppins", sans-serif;
}

/*# sourceMappingURL=cs.map */
