import React, { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import ModalUserCard from "../ModalUserCard/ModalUserCard";
import "./UserCard.css";
import ScrollToTop from "react-scroll-to-top";

const UserCard = () => {
    const [detailedData, setDetailedData] = useState({
        gender: "",
        id: "",
        image: "",
        location: {
            name: "",
        },
        name: "",
        origin: {
            name: "",
        },
        species: "",
        status: "",
    });

    const [display, setDisplay] = useState(false);
    const { data, page, setPage } = useContext(DataContext);

    const lastElement = useRef();
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: document,
            rootMargin: "20px",
            threshold: 1,
        };

        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                const newPage = page + 1;
                setPage(newPage);
            }
        };

        observer.current = new IntersectionObserver(callback, options);

        if (lastElement.current) {
            observer.current.observe(lastElement.current);
        }

        return (() => {
            observer.current.disconnect();
        });
    });

    return (
        <div>
            <div
                className="basic__card-container"
                style={{ filter: display ? "blur(3px)" : "blur(0px)" }}
            >
                {data.map((e) => {
                    return (
                        <div
                            onClick={() => {
                                setDetailedData(e);
                                setDisplay(true);
                            }}
                            key={e.id}
                            className="basic__card"
                        >
                            <div className="basic__card-leftDiv">
                                <img
                                    className="basic__card-profilePic"
                                    src={e.image}
                                    alt=""
                                />
                                <p className="basiс__card-name">{e.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div ref={lastElement}></div>
            <div
                style={{ display: display ? "block" : "none" }}
                className="detailed__card-in-basic"
            >
                <ModalUserCard obj={detailedData} setDisplay={setDisplay} />
            </div>
            <ScrollToTop smooth />
        </div>
    );
};

export default UserCard;