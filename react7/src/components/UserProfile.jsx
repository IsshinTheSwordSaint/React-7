function UserProfile({ name, email, bio, website, isPremium, followerCount }) {
  return (
    <div>
      <h2>
        {name} {isPremium ? <span className="badge">PREMIUM</span> : null}
      </h2>

      <p>Email: {email}</p>

      {bio && <p>Bio: {bio}</p>}

      {website && (
        <p>
          Website: <a href={website}>{website}</a>
        </p>
      )}

      <p>Followers: {followerCount > 999 ? '999+' : followerCount}</p>
    </div>
  );
}

export default UserProfile;
