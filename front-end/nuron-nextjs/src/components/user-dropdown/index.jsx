import Image from "next/image";
import Anchor from "@ui/anchor";
import { useMoralis } from "react-moralis";

const UserDropdown = () => {
    const { logout } = useMoralis();
    return (
        <div className="icon-box">
            <Anchor path="/author">
                <Image
                    src="/images/icons/boy-avater.png"
                    alt="Images"
                    layout="fixed"
                    width={38}
                    height={38}
                />
            </Anchor>
            <div className="rn-dropdown">
                <div className="rn-inner-top">
                    <h4 className="title">
                        <Anchor path="/product">Christopher William</Anchor>
                    </h4>
                    <span>
                        <Anchor path="/product">Set Display Name</Anchor>
                    </span>
                </div>
                <ul className="list-inner">
                    <li>
                        <Anchor path="/author">My Profile</Anchor>
                    </li>
                    <li>
                        <Anchor path="/edit-profile">Edit Profile</Anchor>
                    </li>
                    <li>
                        <button type="button" onClick={logout}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;
