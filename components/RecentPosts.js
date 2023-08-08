import Link from 'next/link';

const RecentPosts = ({ posts }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const monthName = monthNames[date.getMonth()];
    return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">RECENTLY FOUND CARS:</h3>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4 pb-4 border-b border-gray-300">
            <Link href={`/posts/${post.slug}/${post.id}`}>
              <p className="text-sm font-semibold">{formatDate(post.publish_date)}</p>
              <img src={post.thumbnail_url} alt={post.title} className="mb-2 h-20 w-1/2 object-cover rounded"/>
              <h4 className="text-lg font-semibold">{post.title}</h4>
              <p className="text-sm">{post.preview_text}</p>
            </Link>
          </div>
        ))
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
        }}>
          <img src='/loading.gif' alt="Loading" /> {/* In Next.js, static files are served from the /public folder */}
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
