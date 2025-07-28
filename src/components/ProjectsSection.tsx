import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <div id="projects-section" className="bg-background py-24 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">Projects</h2>
        </header>

        <div className="space-y-24">
          {/* CLEAR Project */}
          <section className="bg-card-bg rounded-2xl p-12 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Subscriptions & Payments | CLEAR</h3>
            
            <div className="mb-8">
              <span className="font-semibold text-foreground text-lg">Tools & frameworks:</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Java', 'K8s', 'Dropwizard', 'Stripe', 'Github Actions', 'Datadog', 'Browserstack'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 text-foreground">
              <h4 className="text-xl font-semibold mb-4">Overview</h4>
              <p className="text-lg leading-relaxed mb-4">
                I joined CLEAR as the founding full-time engineer on the Subscriptions & Payments team, where I helped scale our operations from initial concept and design through production deployment and team expansion.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I helped architect and implement a custom Stripe integration that revolutionized our payment infrastructure, enabling advanced capabilities like dynamic repricing and flexible trial periods that previously involved long downtime or development cycles.
              </p>
              <p className="text-lg leading-relaxed">
                The new system is projected to recover up to $13 million in revenue from failed payments and subscription renewals. I led the strategic rollout of our mobile client deployment, orchestrating a careful ramp-up from 0 to 100% of production capacity, ensuring a seamless transition while maintaining system stability.
              </p>
              
              <div className="pb-4">
                <h4 className="text-xl font-semibold mb-4">Details</h4>
                <ol className="list-decimal list-inside space-y-3 text-lg">
                  <li>
                    <a href="https://www.clearme.com/clear-mobile-app" className="text-blue-700 hover:underline font-medium transition-colors">
                      Mobile App
                    </a> <span className="text-muted font-light">was our first client in December</span>
                  </li>
                  <li>
                    <a href="https://enroll.clearme.com/enroll/" className="text-blue-700 hover:underline font-medium transition-colors">
                      CLEAR Web 
                    </a> <span className="text-muted font-light">deployed in February</span>
                  </li>
                  <li>
                    <a href="https://www.clearme.com/face-first-technology-enve-pods" className="text-blue-700 hover:underline font-medium transition-colors">
                      EnVe Pods
                    </a> <span className="text-muted font-light">in all airports March 2025</span>
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <Image
                    src="/clear-2.png"
                    alt="Dynamic re-pricing functionality"
                    width={300}
                    height={200}
                    className="rounded-xl mb-4 mx-auto"
                  />
                  <p className="text-muted leading-relaxed">
                    Dynamic re-pricing decreased development effort & downtime required by the legacy system from several sprints to minutes via admin self-service.
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    src="/clear-3.png"
                    alt="Security architecture"
                    width={300}
                    height={200}
                    className="rounded-xl mb-4 mx-auto"
                  />
                  <p className="text-muted leading-relaxed">
                    First-in-class architecture meant that PII (personally-identifiable information) like PANs don&apos;t flow through the new system ensuring security and compliance.
                  </p>
                </div>
                <div className="text-center ">
                  <Image
                    src="/clear-1.png"
                    alt="Subscription management"
                    width={300}
                    height={200}
                    className="rounded-xl mb-4 mx-auto"
                  />
                  <p className="text-muted leading-relaxed">
                    Subscription group upgrading and downgrading functionality allowed users to modify their subscription in turn increasing revenue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Workday Project */}
          <section className="bg-card-bg rounded-2xl p-12 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Time Anomalies | Workday</h3>
            
            <div className="mb-8">
              <span className="font-semibold text-foreground text-lg">Tools & frameworks:</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Jupyter', 'Xpresso (Java-based OOP)'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 text-foreground">
              <h4 className="text-xl font-semibold mb-4">Overview</h4>
              <p className="text-lg leading-relaxed mb-4">
                Millions of users enter hourly time during their shift every week using time management software. While most of the data entered reflects the actual worked time, users can make mistakes. Once time is submitted, managers and timekeepers need to spend considerable time verifying user input before the time is processed for payroll.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                As part of the Time and Scheduling Hub for managers, Workday Time Anomalies automatically reveals possible time-entry errors and alerts managers about unusual time entries. The goal is to save time and improve payroll and labor cost accuracy.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                At Workday, I built out components of the cross-team Time Anomalies project that allows managers to detect these unusual time entries using machine learning. I also worked to enhance the delivery of this information to users with the Time Approval Summary filters, which allows managers and supervisors to easily discern and sort through discrepancies with their worker&apos;s time.
              </p>
              <p className="text-lg leading-relaxed">
                I deployed the feature through an early adopter phase of 10 customer opt-ins that ultimately scaled to general availability for all Time Tracking customers in Workday 2021.
              </p>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Details</h4>
                <ol className="list-decimal list-inside space-y-3 text-lg">
                  <li>
                    <a href="https://www.workday.com/en-us/products/workforce-management/time.html" className="text-blue-700 hover:underline font-medium transition-colors">
                      Workday Time Management
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.workday.com/en-us/2023/workforce-management-what-know-when-choosing-wfm-solution.html" className="text-blue-700 hover:underline font-medium transition-colors">
                      Workday Payroll & Time Blog Post
                    </a>
                  </li>
                </ol>
              </div>

              <div className="mt-12 text-center">
                <Image
                  src="/time-management.png"
                  alt="Time management interface"
                  width={600}
                  height={400}
                  className="rounded-xl mx-auto shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Job Matcher Project */}
          <section className="bg-card-bg rounded-2xl p-12 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Job Matcher | Project</h3>
            
            <div className="mb-8">
              <span className="font-semibold text-foreground text-lg">Tools & frameworks:</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Python', 'NLP', 'SpaCy', 'Scrapy', 'AWS EC2'].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 text-foreground">
              <h4 className="text-xl font-semibold mb-4">Overview</h4>
              <p className="text-lg leading-relaxed mb-6">
                Create a natural language processing model that matched user resumes with jobs and delivered a daily ranked list of prospective job postings.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Lessons Learned / Challenges</h4>
              <ul className="list-disc list-inside space-y-4 text-lg mb-6">
                <li className="leading-relaxed">
                  <strong>Balancing performance and functionality:</strong> The job scraping and matching for users involved compute-intensive operations due to the ML model. Using serverless asynchronous data processing could not only alleviate server load but could also improve user experience.
                </li>
                <li className="leading-relaxed">
                  <strong>Optimizing the database:</strong> A NoSQL database would allow us to quickly update new jobs with flexibility to change our schema as we prototyped.
                </li>
                <li className="leading-relaxed">
                  <strong>Tuning the algorithm:</strong> We could stack programmatic rules with the machine learning algorithm to deliver more accurate predictions.
                </li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-4">Details</h4>
              <p className="text-lg leading-relaxed mb-4">
                This project was inspired by a friend who came to me with a problem. Recently laid off from a large Seattle-area tech company, he was looking for a new job. While there were many services to help find jobs, finding a good match with unique skills and experiences required many hours manually parsing job descriptions for a good fit.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                What if there was a service that could process and match your resume with related jobs and deliver a ranked list of results daily to aid your job search?
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With that idea in mind, we worked together to create Job Matcher, a service that scrapes job posting websites and uses natural language processing to compute similarities between the postings and user resumes. It would prioritize skills (for example, Ruby or AWS Sagemaker) and return to the user a set of matched jobs ranked by the machine learning model&apos;s scoring criteria daily.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Architecture</h4>
              <p className="text-lg leading-relaxed mb-8">
                The application consists of several main components: The flask server handles the client interaction including user identification and metadata persistence (resume, email, etc.). To communicate with the MongoDB cluster, we exposed pathways via FastAPI to allow for new user creation, updating of user details, and getting the latest matched resumes.
              </p>
              
              <div className="mt-12 text-center">
                <Image
                  src="/JobFinder.png"
                  alt="Job Finder Architecture Diagram"
                  width={600}
                  height={400}
                  className="rounded-xl mx-auto shadow-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}