import React, { useState } from "react";
import { phoneRegEx } from "../../utils";
import styles from "./MobileInput.module.scss";

type mobileType = {
    number: undefined | string,
    valid: boolean
}

const MobileInput = () => {
    const [mobile, setMobile] = useState<mobileType>({
        number: undefined,
        valid: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (phoneRegEx.test(e.target.value)) {
            setMobile({ ...mobile, number: e.target.value, valid: true })
        }
        else {
            setMobile({ ...mobile, number: e.target.value, valid: false })
        }
    }

    return (
        <>
            <div className={styles.mobileInputWrapper}>
                <input type="text" placeholder="Enter mobile number" onChange={handleChange} />
                <br />
                <br />
                Enter the same number used on Man Matters
                <button disabled={!mobile.valid} onClick={() => {
                    console.log('hey')
                }}>Wow! Get my Paytm Card  &#12297;</button>
            </div>
        </>
    );
}

export default MobileInput;