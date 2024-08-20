import React, { memo } from "react";

export default memo(function Form({ name, onChange }) {
    console.log('onChange没有缓存，导致重新渲染');
    
    return (
      <div>
        <input type="text" value={name} onChange={onChange} />
      </div>
    );
  })
