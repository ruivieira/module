window.BENCHMARK_DATA = {
  "lastUpdate": 1661978869640,
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
      },
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
          "id": "731e3dd7eb154ef21b4ed484b1ecab553e5519ed",
          "message": "Restore saving to same repo",
          "timestamp": "2022-08-31T21:43:51+01:00",
          "tree_id": "0d130b8c4bae013a2df1c357f447d8e76c6112f9",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/731e3dd7eb154ef21b4ed484b1ecab553e5519ed"
        },
        "date": 1661978867954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.4302784115022133,
            "unit": "iter/sec",
            "range": "stddev: 0.20008620753224376",
            "extra": "mean: 2.3240766286849976 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 3.6453889823539978,
            "unit": "iter/sec",
            "range": "stddev: 0.030994907904331223",
            "extra": "mean: 274.31914806365967 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.1697122484955826,
            "unit": "iter/sec",
            "range": "stddev: 0.017907188327231486",
            "extra": "mean: 854.9111127853394 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}