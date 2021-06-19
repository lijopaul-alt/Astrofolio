import React, { useState } from "react";
import fire from "../firebase";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../components/styles/contact.css";

const Contact = (props) => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const [open, setOpen] = useState(false);

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const clearInputs = () => {
    setUser({
      ...user,
      name: "",
      email: "",
      message: "",
    });
  };

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const submitHandler = (obj, e) => {
    e.preventDefault();

    if (user.name !== "" && user.email !== "" && user.message !== "") {
      fire.child("Message").push(obj);
      clearInputs();

      onOpenModal();
    } else {
      alert("please enter all the field inputs");
    }
  };

  return (
    <section className="my-28" id="contact">
      <Modal
        open={open}
        center
        classNames={{
          modal: "customModal",
        }}
        showCloseIcon={false}
        onClose={onCloseModal}
        animationDuration={0}
      >
        <div className="modal">
          <h2>
            your message has been sent succesfully{" "}
            <i class="fa fa-check" aria-hidden="true"></i>
          </h2>
        </div>
      </Modal>
      <header className="px-5 text-2xl font-bold pt-10">
        <h2>Contact Me</h2>
        <p className="text-base font-thin">I'd love to hear your thoughts! </p>
      </header>
      <div className="md:mx-6 flex flex-col flex-wrap md:flex-row justify-between">
        <div className="md:w-6/12 md:px-0 p-5 my-5">
          <div>
            <p className="font-bold">Lijo Paul</p>
            <p className="font-thin">Tamil Nadu ,Chennai</p>
            <a
              href="mailto: lijopaul19@gmail.com"
              className="border-b-2 mt-3 inline-block border-gray-500"
            >
              lijopaul19@gmail.com
            </a>
          </div>

          <div className="flex flex-row flex-wrap mt-7">
            <div className="mr-4">
              <a
                href="https://www.linkedin.com/in/lijo-paul-920b25210"
                target="_blank"
                rel="noreferrer"
              >
                {props.isDarkMode ? (
                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                    <img
                      src="./images/icons/linkedin.svg"
                      alt=""
                      width="24px"
                      height="24px"
                      className="mr-1"
                    />
                    LinkedIn
                  </span>
                ) : (
                  <button className="btn"> LinkedIn</button>
                )}
              </a>
            </div>

            <div className="mr-4">
              <a
                href="https://github.com/lijopaul-alt?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                {props.isDarkMode ? (
                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                    <img
                      src="./images/icons/github.svg"
                      alt=""
                      width="24px"
                      height="24px"
                      className="mr-1"
                    />
                    GitHub
                  </span>
                ) : (
                  <button className="btn">GitHub</button>
                )}
              </a>
            </div>
          </div>
        </div>

        <div
          className={
            props.isDarkMode
              ? "bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 "
              : " px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 "
          }
        >
          <form
            className={
              props.isDarkMode
                ? "flex flex-col space-y-3 m-auto w-full"
                : "flex flex-col space-y-3 m-auto w-full white"
            }
            name="contact"
            method="post"
            onSubmit={(e) => submitHandler(user, e)}
          >
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="gradient"
              onChange={inputHandler}
              value={user.name}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="gradient"
              onChange={inputHandler}
              value={user.email}
            ></input>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="25"
              rows="5"
              className="gradient"
              onChange={inputHandler}
              value={user.message}
            ></textarea>
            <button
              type="submit"
              className={
                props.isDarkMode
                  ? "border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md"
                  : "border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md btn"
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div
        className="relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm"
        onClick={() => window.scroll(0, 0)}
      >
        <picture>
          <source
            srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
            type="image/webp"
          />
          <source
            srcSet="./images/rocket.png"
            sizes="(min-width: 768px) 50vw, 100vw"
            type="image/png"
          />
          <img
            width="500px"
            height="500px"
            loading="lazy"
            alt="red rocket flying"
          />
        </picture>
      </div>
    </section>
  );
};

export default Contact;
