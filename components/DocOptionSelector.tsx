import React, { useState } from 'react';
import styles from './DocOptionSelector.module.css';

interface DocOptionSelectorProps {
  options: { [key: string]: string };
  onSelectionChange: (key: string) => void;
}

const DocOptionSelector: React.FC<DocOptionSelectorProps> = ({ options, onSelectionChange }) => {
  const [selectedKey, setSelectedKey] = useState<string>(Object.keys(options)[0]);

  const handleSelection = (key: string) => {
    setSelectedKey(key);
    onSelectionChange(key);
  };

  return (
    <div className={styles.selectorContainer}>
      {Object.entries(options).map(([key, value]) => (
        <button
          key={key}
          className={`${styles.optionButton} ${selectedKey === key ? styles.selected : ''}`}
          onClick={() => handleSelection(key)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default DocOptionSelector;