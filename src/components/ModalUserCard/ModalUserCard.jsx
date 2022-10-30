import React from "react";
import "./ModalUserCard.css";
import { ImCross } from "react-icons/im";

const ModalUserCard = ({ obj, setDisplay }) => {
    return (
        <div key={obj.id} className="card__container">
            <div className="card__upperDiv">
                <div className="card__upperDiv-left">
                    <img
                        className="card__profilePic"
                        src={obj.image}
                        alt=""
                    />
                </div>
                <div className="card__upperDiv-right">
                    <div>
                        <p className="card__name">{obj.name}</p>
                    </div>
                    <div className="card__statusDiv">
                        <p className="card__statusSize">
                            {obj.status} - {obj.species}
                        </p>
                    </div>
                </div>
            </div>
            <div className="card__lowerDiv">
                <div>
                    <p className="card__lowerDiv-greyText">Gender</p>
                    <p className="card__lowerDiv-blackText">
                        {obj.gender}
                    </p>
                </div>
                <div>
                    <p className="card__lowerDiv-greyText">Location</p>
                    <p className="card__lowerDiv-blackText">
                        {obj.location.name}
                    </p>
                </div>
                <div>
                    <p className="card__lowerDiv-greyText">Species</p>
                    <p className="card__lowerDiv-blackText">
                        {obj.species}
                    </p>
                </div>
                <div>
                    <p className="card__lowerDiv-greyText">Origin</p>
                    <p className="card__lowerDiv-blackText">
                        {obj.origin.name}
                    </p>
                </div>
            </div>
            <div
                onClick={() => {
                    setDisplay(false);
                }}
                className="card__iconDiv"
            >
                <ImCross size={15} color="rgb(153, 156, 168)" />
            </div>
        </div>
    );
};

export default ModalUserCard;