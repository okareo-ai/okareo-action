# Okareo GitHub Action

Use Okareo for synthetic scenario generation, custom LLM evaluations and LLM fine tuning from GitHub Actions. This action provides easy access to the Okareo CLI from GitHub workflows.

## Usage

Inside your `.github/workflows/workflow.yml` file:
```yaml
steps:
- uses: actions/checkout@v4
- uses: okareo-ai/okareo-action@v2
  run: okareo run
  env:
    OKAREO_API_KEY: ${{ secrets.OKAREO_API_KEY }} # required
```
Other LLM API keys can also be passed in via environment variables:
```yaml
steps:
- uses: actions/checkout@v4
- uses: okareo-ai/okareo-action@v2
  run: okareo run
  env:
    OKAREO_API_KEY: ${{ secrets.OKAREO_API_KEY }} # required
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }} # optional keys for models you are building with
```
> [!NOTE]
> This assumes that you obtained your Okareo API token from https://app.okareo.com/. More info in docs on how you can [get your API token](https://docs.okareo.com/docs/guides/environment#setting-up-your-okareo-environment). 

## Workflow Options

This GitHub action sets up the right environment and runs Okareo CLI. See `okareo run` in examples above. You can pass a variety of options to the `okareo` CLI command that are documented [here](https://docs.okareo.com/docs/sdk/cli).


In addition to your `.github/workflows/workflow.yml` file Okareo CLI expects the following directory structure to find flow scripts to execute. Under the `flows/` directory there could be Python (.py) or Typescript (.ts) scripts that Okareo CLI will execute. 
```
[repo root]/
│
└─ .okareo/
   │
   ├─ config.yml
   │
   └─ flows/
      │
      └─ [your_flow_script].[py|ts]
```
You could run `okareo init` to initialize the above directory structure within your GitHub repo. See [CLI documentation](https://docs.okareo.com/docs/sdk/cli) on how to install the CLI and options it supports.


### Example `workflow.yml` with Okareo Action for Python flows
```yaml
name: LLM App Development Workflow
env:
  OKAREO_API_KEY: ${{ secrets.OKAREO_API_KEY }}
  OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}

on:
  push:
    branches:
    - main
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
  
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: "3.11"

      - name: Install Okareo 
        uses: okareo-ai/okareo-action@v2
      
      - name: Run Validation
        run: |
          okareo -v
          okareo run 
```
## Viewing Results in Okareo

You can view the results of your synthetic scenario generations and model evaluations in https://app.okareo.com/. Action `stdout` will typically include direct links to newly generated scenarios in format similar to:

`https://app.okareo.com/project/<project UUID>/scenario/<scenario UUID>`

or for evaluations:

`https://app.okareo.com/project/<project UUID>/eval/<evaluation UUID>`