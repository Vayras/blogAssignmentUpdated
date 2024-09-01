const sources = ['Github', 'Twitter', 'Facebook'];

function Archives() {
  return (
    <div>
      <h4 className="font-bold text-lg italic mb-2 mt-12">Sources</h4>
      <ul className="space-y-1">
        {sources.map((source, index) => (
          <li key={index}>
            <a href="#" className="text-blue-600 hover:underline">
              {source}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archives;
