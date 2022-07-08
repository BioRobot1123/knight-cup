/* eslint-disable jsx-a11y/no-static-element-interactions */
import DropDown from './svgs/DropDown';
import { useRef, useState, useContext, useEffect } from 'react';
import { InfoContext } from '../context/InfoContext';

const levelArr = ['Beginner', 'Intermediate', 'Professional'];

function ChessForm({ grandmasters }) {
  const { info, setInfo } = useContext(InfoContext);
  const [levelOptions, setLevelOptions] = useState(false);
  const [characterOptions, setCharacterOptions] = useState(false);

  const levelRef = useRef(null);
  const masterRef = useRef(null);

  function handleLevelDrop() {
    setLevelOptions((prev) => !prev);
  }

  function handleLevelClick(level) {
    if (level === 'Intermediate') {
      level = 'normal';
    }
    setInfo((prev) => ({
      ...prev,
      experience_level: level,
    }));
    setLevelOptions(false);
  }

  function handleCharacterDrop() {
    setCharacterOptions((prev) => !prev);
  }

  function handleMastersClick(id) {
    setInfo((prev) => ({ ...prev, character_id: id }));
    setCharacterOptions(false);
  }

  function handleChange(e) {
    const value = e.target.value === 'yes' ? true : false;
    setInfo((prev) => ({ ...prev, already_participated: value }));
  }

  useEffect(() => {
    setInfo(() => {
      const data = localStorage.getItem('Info');
      if (data) return { ...JSON.parse(data) };
      return {
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        experience_level: '',
        already_participated: true,
        character_id: '',
      };
    });
  }, []);

  return (
    <form className="chess-form container">
      <div className="form-selectors">
        <div className="select-box">
          <div className="selected" onClick={handleLevelDrop}>
            <span ref={levelRef}>
              {info.experience_level ? (
                <>
                  {info.experience_level === 'normal'
                    ? 'Intermediate'
                    : info.experience_level}
                </>
              ) : (
                <>
                  level of knowledge<span className="asterisk"></span>
                </>
              )}
            </span>
            <DropDown options={levelOptions} />
          </div>
          <div
            className={
              levelOptions ? 'options-container active' : 'options-container'
            }
          >
            {levelArr.map((level, i) => (
              <div
                key={i}
                className="level-option"
                onClick={() => handleLevelClick(level)}
              >
                <input type="radio" className="radio" id={level} name="level" />
                <label htmlFor={level}>{level}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="select-box">
          <div className="selected" onClick={handleCharacterDrop}>
            <span ref={masterRef}>
              {info.character_id ? (
                <>{grandmasters[info.character_id - 1]?.name}</>
              ) : (
                <>
                  Choose your character<span className="asterisk"></span>
                </>
              )}
            </span>
            <DropDown options={characterOptions} />
          </div>
          <div
            className={
              characterOptions
                ? 'masters-container active'
                : 'masters-container'
            }
          >
            <p>&#40;Total {grandmasters.length}&#41;</p>
            {grandmasters.map((item) => (
              <div
                key={item.id}
                className="masters-option"
                onClick={() => handleMastersClick(item.id)}
              >
                <input
                  type="radio"
                  className="radio"
                  id={item.name}
                  name="master"
                />
                <div className="masters-info">
                  <label htmlFor={item.name}>{item.name}</label>
                  <img
                    htmlFor="begginer"
                    src={`https://chess-tournament-api.devtest.ge${item.image}`}
                    alt="grandmaster"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="asterisk">
        Have you participated in the Redberry Championship?&nbsp;
      </p>
      <div className="radio-buttons" onChange={handleChange}>
        <div className="radio-button">
          <input
            type="radio"
            id="yes"
            name="participation"
            value="yes"
            defaultChecked={info.already_participated ? true : false}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="no"
            name="participation"
            value="no"
            defaultChecked={info.already_participated ? false : true}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
    </form>
  );
}

export default ChessForm;