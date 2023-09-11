import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Switch = ({
    property1,
    className,
    overlapGroupClassName,
    ellipseClassName,
    SIMClassName,
    nOClassName,
}) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "frame-1",
    });

    return (
        <div
            className={`component ${state.property1} ${className}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`ellipse ${ellipseClassName}`} />
                <div className={`SIM ${SIMClassName}`}>
                    {state.property1 === "frame-1" && <>ON</>}

                    {state.property1 === "frame-2" && <>OFF</>}
                </div>
            </div>
            <div className={`n-o ${nOClassName}`}>
                {state.property1 === "frame-1" && <>NÃO</>}

                {state.property1 === "frame-2" && <>SIM</>}
            </div>
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "click":
            return {
                ...state,
                property1: "frame-1",
            };
    }

    return state;
}

Switch.propTypes = {
    property1: PropTypes.oneOf(["frame-1", "frame-2"]),
};
