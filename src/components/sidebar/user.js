import React, { memo } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`}>
      <div className="flex items-center">
        <div className="mb-6">
          <img
            className="rounded-full w-16 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
          />
        </div>
        <div className="mb-6">
          <p className="font-bold text-sm">{username}</p>
          <p className="text-sm">{fullName}</p>
        </div>
      </div>
    </Link>
  );

User.whyDidYouRender = true;
export default User;

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
