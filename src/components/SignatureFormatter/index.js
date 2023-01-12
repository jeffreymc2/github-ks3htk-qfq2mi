import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { shape, string } from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0rem;
`;

const EmailResult = styled.textarea`
  padding: 2rem;
  margin-bottom: 3rem;
`;

const EmailExample = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #fff;
`;


const Address1 = (e) => {
  if (!e) {
    return '';
  }
  return `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif"><i>${e}</i></span>`;
};

const Address2 = (e) => {
  if (!e) {
    return '';
  }
  return `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif"><i>${e}</i></span>`;
};

const Phone = e =>
  `<br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">${e}</span>`;

const Template = ({
  name,
  job,
  logo,
  address1,
  address2,
  phone
}) => `
<table width="520" cellspacing="0" cellpadding="0" border="0">
<tr>
<td style="vertical-align: top; width: 100px; text-align:left;color:#444444;font-size:13px;font-family:tahoma,sans-serif; text-align:left">
    <img width="70" src=" ${logo}" alt="Greenberry" style="border:none;" />
  </td>
  <td style="vertical-align: top; text-align:left;width: 350px; color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma,sans-serif; text-align:left">
      <span style="color:#000000;font-size:13px;line-height: 1.5;font-family:'arial black',tahoma, sans-serif;text-transform: uppercase;">
        ${name}
      </span>
      <br/>
      <span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">
        ${job}
      </span>
      ${typeof address1 !== "undefined" ? Address1(address1) : ""}
      ${typeof address2!== "undefined" ? Address2(address2) : ""}

      <br/><span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">Maliebaan 11</span>
      <br/>
      <span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">3581 CA Utrecht</span>
      <br/>
      <span style="color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">+31302737424</span>
      ${typeof phone !== "undefined" ? Phone(phone) : ""}
      <br/>
      <a href="https://www.perfectgame.org" style="font-size:13px;line-height: 1.5;font-family:tahoma, sans-serif">www.perfectgame.org</a>
  </td>
</tr>
<tr>
  
</tr>
<tr>
  <td style="vertical-align: top; text-align:left;color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma,sans-serif; text-align:left">
   
  </td>
  <td style="vertical-align: top; text-align:left;color:#444444;font-size:13px;line-height: 1.5;font-family:tahoma,sans-serif; text-align:left">
   <p>Test</p>
  </td>
</tr>
</table>`;

const SignatureFormatter = ({ user }) => {
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const Result = Template(userInfo);

  return (
    <Wrapper>
      <EmailExample dangerouslySetInnerHTML={{ __html: Result }} />
      <EmailResult readonly rows="30" value={Result} />
    </Wrapper>
  );
};

SignatureFormatter.propTypes = {
  user: shape({
    name: string.isRequired,
    job: string.isRequired,
    address1: string,
    address2: string,
    phone: string
  }).isRequired
};

export default SignatureFormatter;