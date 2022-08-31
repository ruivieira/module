window.BENCHMARK_DATA = {
  "lastUpdate": 1661976008757,
  "repoUrl": "https://github.com/ruivieira/trustyai-explainability-python",
  "entries": {
    "TrustyAI continuous benchmarks": [
      {
        "commit": {
          "author": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "committer": {
            "email": "ruidevieira@googlemail.com",
            "name": "Rui Vieira",
            "username": "ruivieira"
          },
          "distinct": true,
          "id": "f26af11ba6a2b2cd3f049ab828964eecd66b3863",
          "message": "Add LIME benchmark",
          "timestamp": "2022-08-31T20:57:15+01:00",
          "tree_id": "51c1d710aa811f7ed87d76e5ce20412751c995e6",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/f26af11ba6a2b2cd3f049ab828964eecd66b3863"
        },
        "date": 1661976007997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.8695062702530627,
            "unit": "iter/sec",
            "range": "stddev: 0.011213948401490334",
            "extra": "mean: 1.1500779628753661 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.8679120292342226,
            "unit": "iter/sec",
            "range": "stddev: 0.0027635963039894743",
            "extra": "mean: 535.3571176528931 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 1604.874585136753,
            "unit": "iter/sec",
            "range": "stddev: 0.0003463087515508682",
            "extra": "mean: 623.1016487277659 usec\nrounds: 1662"
          }
        ]
      }
    ]
  }
}