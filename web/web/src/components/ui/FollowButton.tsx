import React from "react";
import { AnyUserFragment, useMeQuery } from "~/generated/graphql";
import styles from "@peblo/css/profile/profile.module.css";

interface Props {
  props: AnyUserFragment;
}

export default function FollowButton({ props }: { props: Props }) {
  const { data } = useMeQuery();
  return (
    <>
      <div className={styles.follow_account}>
        {props.props.followers.includes(data?.me?.id) ? (
          <>Follow</>
        ) : (
          <>Unfollow</>
        )}
      </div>
    </>
  );
}
