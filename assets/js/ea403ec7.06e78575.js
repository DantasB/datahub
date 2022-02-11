"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8387],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6418:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(4137)),l=["components"],o={title:"DataHub CLI",sidebar_label:"CLI",slug:"/cli",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/cli.md"},s="DataHub CLI",d={unversionedId:"docs/cli",id:"docs/cli",isDocsHomePage:!1,title:"DataHub CLI",description:"DataHub comes with a friendly cli called datahub that allows you to perform a lot of common operations using just the command line.",source:"@site/genDocs/docs/cli.md",sourceDirName:"docs",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/cli.md",tags:[],version:"current",frontMatter:{title:"DataHub CLI",sidebar_label:"CLI",slug:"/cli",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/cli.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart Guide",permalink:"/docs/quickstart"},next:{title:"Metadata Ingestion",permalink:"/docs/metadata-ingestion"}},u=[{value:"Release Notes",id:"release-notes",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Using pip",id:"using-pip",children:[],level:3},{value:"Using docker",id:"using-docker",children:[],level:3}],level:2},{value:"User Guide",id:"user-guide",children:[{value:"docker",id:"docker",children:[],level:3},{value:"ingest",id:"ingest",children:[],level:3},{value:"check",id:"check",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"telemetry",id:"telemetry",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"get",id:"get",children:[],level:3},{value:"put",id:"put",children:[],level:3},{value:"migrate",id:"migrate",children:[{value:"dataplatform2instance",id:"dataplatform2instance",children:[{value:"Dry Run",id:"dry-run",children:[],level:5},{value:"Real Migration (with soft-delete)",id:"real-migration-with-soft-delete",children:[],level:5}],level:4}],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahub-cli"},"DataHub CLI"),(0,r.kt)("p",null,"DataHub comes with a friendly cli called ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," that allows you to perform a lot of common operations using just the command line."),(0,r.kt)("h2",{id:"release-notes"},"Release Notes"),(0,r.kt)("p",null,"You can find the release notes in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/releases"},"github releases"),". If you wish release notes for each bug-fix release you can find them in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub/releases"},"acryldata releases"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"using-pip"},"Using pip"),(0,r.kt)("p",null,"We recommend python virtual environments (venv-s) to namespace pip modules. Here's an example setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m venv datahub-env             # create the environment\nsource datahub-env/bin/activate         # activate the environment\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," If you install ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," in a virtual environment, that same virtual environment must be re-activated each time a shell window or session is created."),(0,r.kt)("p",null,"Once inside the virtual environment, install ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," using the following commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'# Requires Python 3.6+\npython3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n# If you see "command not found", try running this instead: python3 -m datahub version\n')),(0,r.kt)("p",null,"If you run into an error, try checking the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing#Common-setup-issues"},(0,r.kt)("em",{parentName:"a"},"common setup issues")),"."),(0,r.kt)("h3",{id:"using-docker"},"Using docker"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-ingestion")," docker image as explained in ",(0,r.kt)("a",{parentName:"p",href:"/docs/docker"},"Docker Images"),". In case you are using Kubernetes you can start a pod with the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-ingestion")," docker image, log onto a shell on the pod and you should have the access to datahub CLI in your kubernetes cluster."),(0,r.kt)("h2",{id:"user-guide"},"User Guide"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli allows you to do many things, such as quickstarting a DataHub docker instance locally, ingesting metadata from your sources, as well as retrieving and modifying metadata.\nLike most command line tools, ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," is your best friend. Use it to discover the capabilities of the cli and the different commands and sub-commands that are supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Usage: datahub [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --debug / --no-debug\n  --version             Show the version and exit.\n  --help                Show this message and exit.\n\nCommands:\n  check      Helper commands for checking various aspects of DataHub.\n  delete     Delete metadata from datahub using a single urn or a combination of filters\n  docker     Helper commands for setting up and interacting with a local DataHub instance using Docker.\n  get        Get metadata for an entity with an optional list of aspects to project\n  ingest     Ingest metadata into DataHub.\n  init       Configure which datahub instance to connect to\n  put        Update a single aspect of an entity\n  telemetry  Toggle telemetry.\n  version    Print version number and exit.\n")),(0,r.kt)("p",null,"The following top-level commands listed below are here mainly to give the reader a high-level picture of what are the kinds of things you can accomplish with the cli.\nWe've ordered them roughly in the order we expect you to interact with these commands as you get deeper into the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),"-verse."),(0,r.kt)("h3",{id:"docker"},"docker"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," command allows you to start up a local DataHub instance using ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart"),". You can also check if the docker cluster is healthy using ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub docker check"),"."),(0,r.kt)("h3",{id:"ingest"},"ingest"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," command allows you to ingest metadata from your sources using ingestion configuration files, which we call recipes. The main ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"ingestion page")," contains detailed instructions about how you can use the ingest command and perform advanced operations like rolling-back previously ingested metadata through the ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback")," sub-command."),(0,r.kt)("h3",{id:"check"},"check"),(0,r.kt)("p",null,"The datahub package is composed of different plugins that allow you to connect to different metadata sources and ingest metadata from them.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," command allows you to check if all plugins are loaded correctly as well as validate an individual MCE-file."),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"The init command is used to tell ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," about where your DataHub instance is located. The CLI will point to localhost DataHub by default.\nRunning ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub init")," will allow you to customize the datahub instance you are communicating with."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": Provide your GMS instance's host when the prompt asks you for the DataHub host."),(0,r.kt)("p",null,"Alternatively, you can set the following env variables if you don't want to use a config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"DATAHUB_SKIP_CONFIG=True\nDATAHUB_GMS_HOST=http://localhost:8080\nDATAHUB_GMS_TOKEN= # Used for communicating with DataHub Cloud\nThe env variables take precedence over what is in the config.\n")),(0,r.kt)("h3",{id:"telemetry"},"telemetry"),(0,r.kt)("p",null,"To help us understand how people are using DataHub, we collect anonymous usage statistics on actions such as command invocations via Google Analytics.\nWe do not collect private information such as IP addresses, contents of ingestions, or credentials.\nThe code responsible for collecting and broadcasting these events is open-source and can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/telemetry/telemetry.py"},"within our GitHub"),"."),(0,r.kt)("p",null,"Telemetry is enabled by default, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," command lets you toggle the sending of these statistics via ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry enable/disable"),".\nYou can also disable telemetry by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"DATAHUB_TELEMETRY_ENABLED")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," command allows you to delete metadata from DataHub. Read this ",(0,r.kt)("a",{parentName:"p",href:"/docs/how/delete-metadata"},"guide")," to understand how you can delete metadata from DataHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'datahub delete --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --soft\n')),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," command allows you to easily retrieve metadata from DataHub, by using the REST API.\nFor example the following command gets the ownership aspect from the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --aspect ownership | jq                                                                       put_command\n{\n  "value": {\n    "com.linkedin.metadata.snapshot.DatasetSnapshot": {\n      "aspects": [\n        {\n          "com.linkedin.metadata.key.DatasetKey": {\n            "name": "SampleHiveDataset",\n            "origin": "PROD",\n            "platform": "urn:li:dataPlatform:hive"\n          }\n        },\n        {\n          "com.linkedin.common.Ownership": {\n            "lastModified": {\n              "actor": "urn:li:corpuser:jdoe",\n              "time": 1581407189000\n            },\n            "owners": [\n              {\n                "owner": "urn:li:corpuser:jdoe",\n                "type": "DATAOWNER"\n              },\n              {\n                "owner": "urn:li:corpuser:datahub",\n                "type": "DATAOWNER"\n              }\n            ]\n          }\n        }\n      ],\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"put"},"put"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," command allows you to write metadata into DataHub. This is a flexible way for you to issue edits to metadata from the command line.\nFor example, the following command instructs ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ownership")," aspect of the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)")," to the value in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"ownership.json"),".\nThe JSON in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ownership.json")," file needs to conform to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Ownership.pdl"},(0,r.kt)("inlineCode",{parentName:"a"},"Ownership"))," Aspect model as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owners": [\n    {\n      "owner": "urn:li:corpuser:jdoe",\n      "type": "DEVELOPER"\n    },\n    {\n      "owner": "urn:li:corpuser:jdub",\n      "type": "DATAOWNER"\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'datahub --debug put --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --aspect ownership -d ownership.json\n\n[DATE_TIMESTAMP] DEBUG    {datahub.cli.cli_utils:340} - Attempting to emit to DataHub GMS; using curl equivalent to:\ncurl -X POST -H \'User-Agent: python-requests/2.26.0\' -H \'Accept-Encoding: gzip, deflate\' -H \'Accept: */*\' -H \'Connection: keep-alive\' -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'Content-Type: application/json\' --data \'{"proposal": {"entityType": "dataset", "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)", "aspectName": "ownership", "changeType": "UPSERT", "aspect": {"contentType": "application/json", "value": "{\\"owners\\": [{\\"owner\\": \\"urn:li:corpuser:jdoe\\", \\"type\\": \\"DEVELOPER\\"}, {\\"owner\\": \\"urn:li:corpuser:jdub\\", \\"type\\": \\"DATAOWNER\\"}]}"}}}\' \'http://localhost:8080/aspects/?action=ingestProposal\'\nUpdate succeeded with status 200\n')),(0,r.kt)("h3",{id:"migrate"},"migrate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate")," group of commands allows you to perform certain kinds of migrations. "),(0,r.kt)("h4",{id:"dataplatform2instance"},"dataplatform2instance"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform2instance")," migration command allows you to migrate your entities from an instance-agnostic platform identifier to an instance-specific platform identifier. If you have ingested metadata in the past for this platform and would like to transfer any important metadata over to the new instance-specific entities, then you should use this command. For example, if your users have added documentation or added tags or terms to your datasets, then you should run this command to transfer this metadata over to the new entities. For further context, read the Platform Instance Guide ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-instances"},"here"),"."),(0,r.kt)("p",null,"A few important options worth calling out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"--dry-run / -n : Use this to get a report for what will be migrated before running"),(0,r.kt)("li",{parentName:"ul"},"--force / -F : Use this if you know what you are doing and do not want to get a confirmation prompt before migration is started"),(0,r.kt)("li",{parentName:"ul"},"--keep : When enabled, will preserve the old entities and not delete them. Default behavior is to soft-delete old entities."),(0,r.kt)("li",{parentName:"ul"},"--hard : When enabled, will hard-delete the old entities.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": Timeseries aspects such as Usage Statistics and Dataset Profiles are not migrated over to the new entity instances, you will get new data points created when you re-run ingestion using the ",(0,r.kt)("inlineCode",{parentName:"p"},"usage")," or sources with profiling turned on."),(0,r.kt)("h5",{id:"dry-run"},"Dry Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"datahub migrate dataplatform2instance --platform elasticsearch --instance prod_index --dry-run\nStarting migration: platform:elasticsearch, instance=prod_index, force=False, dry-run=True\n100% (25 of 25) |####################################################################################################################################################################################| Elapsed Time: 0:00:00 Time:  0:00:00\n[Dry Run] Migration Report:\n--------------\n[Dry Run] Migration Run Id: migrate-5710349c-1ec7-4b83-a7d3-47d71b7e972e\n[Dry Run] Num entities created = 25\n[Dry Run] Num entities affected = 0\n[Dry Run] Num entities migrated = 25\n[Dry Run] Details:\n[Dry Run] New Entities Created: {'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datahubretentionindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.schemafieldindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.system_metadata_service_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.tagindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataset_datasetprofileaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlmodelindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlfeaturetableindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datajob_datahubingestioncheckpointaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datahub_usage_event,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataset_operationaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datajobindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataprocessindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.glossarytermindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataplatformindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlmodeldeploymentindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datajob_datahubingestionrunsummaryaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.graph_service_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.datahubpolicyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataset_datasetusagestatisticsaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dashboardindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.glossarynodeindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlfeatureindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.dataflowindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.mlprimarykeyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,prod_index.chartindex_v2,PROD)'}\n[Dry Run] External Entities Affected: None\n[Dry Run] Old Entities Migrated = {'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataset_datasetusagestatisticsaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlmodelindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlmodeldeploymentindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datajob_datahubingestionrunsummaryaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datahubretentionindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datahubpolicyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataset_datasetprofileaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,glossarynodeindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataset_operationaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,graph_service_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datajobindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlprimarykeyindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dashboardindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datajob_datahubingestioncheckpointaspect_v1,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,tagindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,datahub_usage_event,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,schemafieldindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlfeatureindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataprocessindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataplatformindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,mlfeaturetableindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,glossarytermindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,dataflowindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,chartindex_v2,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:elasticsearch,system_metadata_service_v1,PROD)'}\n")),(0,r.kt)("h5",{id:"real-migration-with-soft-delete"},"Real Migration (with soft-delete)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> datahub migrate dataplatform2instance --platform hive --instance \ndatahub migrate dataplatform2instance --platform hive --instance warehouse\nStarting migration: platform:hive, instance=warehouse, force=False, dry-run=False\nWill migrate 4 urns such as ['urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)']\nNew urns will look like ['urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.logging_events,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_created,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_deleted,PROD)']\n\nOk to proceed? [y/N]:\n...\nMigration Report:\n--------------\nMigration Run Id: migrate-f5ae7201-4548-4bee-aed4-35758bb78c89\nNum entities created = 4\nNum entities affected = 0\nNum entities migrated = 4\nDetails:\nNew Entities Created: {'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_deleted,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.logging_events,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,warehouse.fct_users_created,PROD)'}\nExternal Entities Affected: None\nOld Entities Migrated = {'urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)', 'urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)'}\n")))}m.isMDXComponent=!0}}]);