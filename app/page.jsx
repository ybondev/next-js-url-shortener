"use client";
import Result from "@components/Result";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaLink } from "react-icons/fa";

const page = () => {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [shorten, setShorten] = useState("");

  const handleClick = () => {
    if (!value) {
      toast.error("Invalid URL");
    } else {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <section className="container url_container">
      <div className="row gy-3">
        <div className="col-md-6">
          <Image
            src="./assets/undraw_link_shortener_mvf6.svg"
            width={1000}
            height={1000}
            className="img-fluid mt-3"
            alt="undraw_link_shortener_mvf6.svg"
          />
        </div>
        <div className="col-md-6">
          <div className="form_container">
            <h1>
              URL <span>Shortener</span>
            </h1>
            <div className="url_input mt-3">
              <input
                type="text"
                id="url"
                className="form-control"
                placeholder="Paste your URL here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="icon" onClick={handleClick}>
                <FaLink className="fa_icon" /> Shorten
              </div>
            </div>
            <Result
              inputValue={inputValue}
              shorten={shorten}
              setShorten={setShorten}
            />
            <div className="dev mt-3">
              <Link href="" className="link">
                ybon.dev
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
