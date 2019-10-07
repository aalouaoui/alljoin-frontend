import React from "react";
import { A } from "hookrouter";

const FooterList = ({ title, list }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {list.map(({ label, path, href }) => (
        <li key={label}>
          <A href={path ? `categories/${path}` : href}>{label}</A>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterList;
