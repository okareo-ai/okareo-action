# Okareo action for running flows

This action provides easy access to the Okareo CLI from github actions.

## Inputs

### `vesion`

**Not Required** The version of the action to use.

## Outputs

### `results`

The results of your model evaluations

## Example usage

```yaml
uses: actions/okareo-action@v2
with:
  version: '0.0.8'
```