"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCard = void 0;
const LanguageCard = ({ languages }) => {
    return (<div className="card" key={languages.id}>
            <h2>{languages.name}</h2>
            <p>{languages.level}</p>
        </div>);
};
exports.LanguageCard = LanguageCard;
