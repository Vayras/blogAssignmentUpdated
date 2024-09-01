const archives = [
  'March 2014',
  'February 2014',
  'January 2014',
  'December 2013',
  'November 2013',
  'October 2013',
  'September 2013',
  'August 2013',
  'July 2013',
  'June 2013',
  'May 2013',
  'April 2013',
];

function Archives() {
  return (
    <div>
      <h4 className="font-bold text-lg italic mb-2 mt-12">Archives</h4>
      <ul className="space-y-1">
        {archives.map((month, index) => (
          <li key={index}>
            <a href="#" className="text-blue-600 hover:underline">
              {month}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archives;
