---
title: Products
description: K7RHY ham radio kits.
date: "2024-07-01"
---

# {% $markdoc.frontmatter.title %}

{% 
const [selectedFlavor, setSelectedFlavor] = React.useState("flavor1");
const handleSelectionChange = (selectedKey) => {
  setSelectedFlavor(selectedKey);
};
const optionsList = {
  flavor1: "Flavor 1",
  flavor2: "Flavor 2",
  flavor3: "Flavor 3",
};

%}

{% DocOptionSelector options=optionsList onSelectedChange=handleSelectedChange %}