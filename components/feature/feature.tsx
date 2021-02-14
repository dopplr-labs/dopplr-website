import { CheckCircle, Graph, Editor, Database } from '../../icons'

export default function Feature() {
  return (
    <>
      <div className="relative pt-16 pb-32 overflow-hidden bg-white">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-brand-primary">
                    <Editor />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Powerful editor for writing queries
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Dopplr provides powerful web-based code editor to write SQL
                    queries on your databases.
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>Auto-complete and syntax highlighting</span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>Code Formatting and keyboard shortcuts</span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>
                      Completely customizable using different themes and fonts
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/dopplr-editor-snapshot.jpg"
                  alt="Dopplr Editor Snapshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-brand-primary">
                    <Graph />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Beautiful data visualization
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Dopplr comes with a huge set of highly customizable
                    visualization tools for your data
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>A myriad of graphs to choose from</span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>Granular configuration for graph axes</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/dopplr-graph-snapshot.jpg"
                  alt="Dopplr Graph Snapshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-brand-primary">
                    <Database />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Extensive database support
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Dopplr provides connectors for well known databases
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>Postgres</span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>MySQL</span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>
                      Vertica
                    </span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>
                      Hive
                    </span>
                  </p>
                  <p className="flex items-center mt-4 space-x-2 text-lg text-gray-500">
                    <CheckCircle />
                    <span>
                      And many more...
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/dopplr-database-snapshot.jpg"
                  alt="Dopplr Editor Snapshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
