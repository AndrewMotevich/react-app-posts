import React from "react";
import MySelect from "./UI/selects/MySelect";
import MyInput from "./UI/inputs/MyInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => {
          setFilter({ ...filter, query: e.target.value });
        }}
        placeholder="Search..."
      />
      <MySelect
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        value={filter.sort}
        defaultValue={"Sort"}
        options={[
          { name: "By name", value: "title" },
          { name: "By description", value: "body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
