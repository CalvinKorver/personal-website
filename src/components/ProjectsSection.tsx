import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <div id="projects-section" className="bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-600">Some recent projects that I&apos;ve worked on...</p>
        </header>

        <div className="space-y-16">
          {/* CLEAR Project */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Subscriptions & Payments | CLEAR</h2>
            
            <div className="mb-6">
              <span className="font-semibold text-gray-700">Tools & frameworks:</span>
              <p className="text-gray-600">Java, K8s, Dropwizard, Stripe, Github Actions, Datadog, Browserstack</p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold">Overview</h3>
              <p>
                I joined CLEAR as the founding full-time engineer on the Subscriptions & Payments team, where I helped scale our operations from initial concept and design through production deployment and team expansion.
              </p>
              <p>
                I helped architect and implement a custom Stripe integration that revolutionized our payment infrastructure, enabling advanced capabilities like dynamic repricing and flexible trial periods that previously involved long downtime or development cycles.
              </p>
              <p>
                The new system is projected to recover up to $13 million in revenue from failed payments and subscription renewals. I led the strategic rollout of our mobile client deployment, orchestrating a careful ramp-up from 0 to 100% of production capacity, ensuring a seamless transition while maintaining system stability.
              </p>
              
              <div>
                <h3 className="font-semibold mb-2">Information & details</h3>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    <a href="https://www.clearme.com/clear-mobile-app" className="text-blue-600 hover:underline">
                      Mobile App
                    </a> (our first client, deployed new platform in December)
                  </li>
                  <li>
                    <a href="https://enroll.clearme.com/enroll/" className="text-blue-600 hover:underline">
                      CLEAR web enrollment
                    </a> (deployed in February)
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Image
                    src="/clear-2.png"
                    alt="Dynamic re-pricing functionality"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 mx-auto"
                  />
                  <p className="text-sm text-gray-600">
                    Dynamic re-pricing decreased development effort & downtime required by the legacy system from several sprints to minutes via admin self-service.
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    src="/clear-3.png"
                    alt="Security architecture"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 mx-auto"
                  />
                  <p className="text-sm text-gray-600">
                    First-in-class architecture meant that PII (personally-identifiable information) like PANs don&apos;t flow through the new system ensuring security and compliance.
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    src="/clear-1.png"
                    alt="Subscription management"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 mx-auto"
                  />
                  <p className="text-sm text-gray-600">
                    Subscription group upgrading and downgrading functionality allowed users to modify their subscription in turn increasing revenue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Workday Project */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Time Anomalies | Workday</h2>
            
            <div className="mb-6">
              <span className="font-semibold text-gray-700">Tools & frameworks:</span>
              <p className="text-gray-600">Jupyter, Xpresso (Java-based OOP language)</p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold">Overview</h3>
              <p>
                Millions of users enter hourly time during their shift every week using time management software. While most of the data entered reflects the actual worked time, users can make mistakes. Once time is submitted, managers and timekeepers need to spend considerable time verifying user input before the time is processed for payroll.
              </p>
              <p>
                As part of the Time and Scheduling Hub for managers, Workday Time Anomalies automatically reveals possible time-entry errors and alerts managers about unusual time entries. The goal is to save time and improve payroll and labor cost accuracy.
              </p>
              <p>
                At Workday, I built out components of the cross-team Time Anomalies project that allows managers to detect these unusual time entries using machine learning. I also worked to enhance the delivery of this information to users with the Time Approval Summary filters, which allows managers and supervisors to easily discern and sort through discrepancies with their worker&apos;s time.
              </p>
              <p>
                I deployed the feature through an early adopter phase of 10 customer opt-ins that ultimately scaled to general availability for all Time Tracking customers in Workday 2021.
              </p>
              
              <div>
                <h3 className="font-semibold mb-2">Information & details</h3>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    <a href="https://www.workday.com/en-us/products/workforce-management/time.html" className="text-blue-600 hover:underline">
                      Workday Time Management
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.workday.com/en-us/2023/workforce-management-what-know-when-choosing-wfm-solution.html" className="text-blue-600 hover:underline">
                      Workday Payroll & Time Blog Post
                    </a>
                  </li>
                </ol>
              </div>

              <div className="mt-6">
                <Image
                  src="/time-management.png"
                  alt="Time management interface"
                  width={600}
                  height={400}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Job Matcher Project */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Job Matcher | Project</h2>
            
            <div className="mb-6">
              <span className="font-semibold text-gray-700">Tools & frameworks:</span>
              <p className="text-gray-600">Python, NLP, SpaCy, Scrapy, AWS EC2</p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold">Overview</h3>
              <p>
                Create a natural language processing model that matched user resumes with jobs and delivered a daily ranked list of prospective job postings.
              </p>
              
              <h3 className="font-semibold">Lessons Learned / Challenges</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Balancing performance and functionality: The job scraping and matching for users involved compute-intensive operations due to the ML model. Using serverless asynchronous data processing could not only alleviate server load but could also improve user experience.
                </li>
                <li>
                  Optimizing the database: A NoSQL database would allow us to quickly update new jobs with flexibility to change our schema as we prototyped.
                </li>
                <li>
                  Tuning the algorithm: We could stack programmatic rules with the machine learning algorithm to deliver more accurate predictions.
                </li>
              </ul>
              
              <h3 className="font-semibold">Details</h3>
              <p>
                This project was inspired by a friend who came to me with a problem. Recently laid off from a large Seattle-area tech company, he was looking for a new job. While there were many services to help find jobs, finding a good match with unique skills and experiences required many hours manually parsing job descriptions for a good fit.
              </p>
              <p>
                What if there was a service that could process and match your resume with related jobs and deliver a ranked list of results daily to aid your job search?
              </p>
              <p>
                With that idea in mind, we worked together to create Job Matcher, a service that scrapes job posting websites and uses natural language processing to compute similarities between the postings and user resumes. It would prioritize skills (for example, Ruby or AWS Sagemaker) and return to the user a set of matched jobs ranked by the machine learning model&apos;s scoring criteria daily.
              </p>
              
              <h3 className="font-semibold">Architecture</h3>
              <p>
                The application consists of several main components: The flask server handles the client interaction including user identification and metadata persistence (resume, email, etc.). To communicate with the MongoDB cluster, we exposed pathways via FastAPI to allow for new user creation, updating of user details, and getting the latest matched resumes.
              </p>
              
              <div className="mt-6">
                <Image
                  src="/JobFinder.png"
                  alt="Job Finder Architecture Diagram"
                  width={600}
                  height={400}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}