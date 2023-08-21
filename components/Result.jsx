"use client";
import { FaCopy } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Result = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${props.inputValue}`
      );
      props.setShorten(res.data.result.short_link);
      console.log(res.data.result.short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (props.inputValue) {
      fetchData();
    }
  }, [props.inputValue]);

  if (loading) {
    return <p className="mt-3">loading...</p>;
  }

  if (error) {
    return <p className="mt-3">something went wrong</p>;
  }

  const handleClipboard = async () => {
    if (props.shorten) {
      await navigator.clipboard.writeText(props.shorten);
      toast.success("Copied to your clipboard");
    } else {
      toast.error("No password to copy");
    }
  };

  return (
    <>
      {props.shorten && (
        <div className="result_container mt-3">
          <input
            type="text"
            id="result"
            className="form-control"
            value={props.shorten}
            readOnly
          />
          <div className="icon" onClick={handleClipboard}>
            <FaCopy className="fa_icon" /> Copy
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
