const Workflow = () => {
  const freeResources = [
    "Consolidation (pdf)",
    "Financing Decision (pdf)",
    "Financial Management (pdf) (KCE University)",
    "Publisher FR (pdf)",
    "Public Sector Accounting (pdf)",
    "Partnership (pdf)",
    "Professional Firm FR (pdf)",
    "Leases (FR)",
    "Income Taxes and Borrowing Costs (pdf)",
    "Hire Purchase (pdf)",
    "Group and Cash Flows (pdf)",
    "Financial Statement Analysis (pdf)",
    "Employees Benefits (pdf)",
    "Contract (pdf)",
    "Branch Accounting (pdf)",
    "Agriculture FR (pdf)",
    "Accounting For Cooperatives (pdf)",
    "Capital Budgeting (pdf)",
    "Replacement Analysis (pdf)",
    "Dividend Policy (pdf)",
    "Ratio Analysis (pdf)",
    "The Concept And Principles of Islamic Finance (pdf)",
    "Published Financial Statement (pdf) Revision",
    "Formation Of Companies (pdf)",
    "Accounting For Assets and Liabilities (pdf)",
    "Consolidation",
    "Debt Capital (pdf)",
    "Company Directors (pdf)",
    "Company Law (pdf)",
  ];

  return (
    <div id ="free-resources" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Free resources{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          to aid your studies.
        </span>
      </h2>
      <div className="flex justify-center mt-10">
        {/* Resources List Section */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {freeResources.map((resource, index) => (
              <div
                key={index}
                className="bg-neutral-900 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold">{resource}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
