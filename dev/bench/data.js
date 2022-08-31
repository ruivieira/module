window.BENCHMARK_DATA = {
  "lastUpdate": 1661958265629,
  "repoUrl": "https://github.com/ruivieira/trustyai-explainability-python",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "1a92c36fc5b3aae7fb98d8133ed9b66299155718",
          "message": "Update benchmark",
          "timestamp": "2022-08-31T14:07:10+01:00",
          "tree_id": "41330d308357bed23ab109ff710689c84f644b62",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/1a92c36fc5b3aae7fb98d8133ed9b66299155718"
        },
        "date": 1661951398099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_fib_10",
            "value": 0.447788995457421,
            "unit": "iter/sec",
            "range": "stddev: 0.06770123247467465",
            "extra": "mean: 2.2331946746000084 sec\nrounds: 5"
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
          "id": "570f22a28f98b09dce1e5570d5416fb623e8c095",
          "message": "Change benchmark name",
          "timestamp": "2022-08-31T14:13:06+01:00",
          "tree_id": "ab7fe2a5a51edbcba397e560a8ca061733a81ea4",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/570f22a28f98b09dce1e5570d5416fb623e8c095"
        },
        "date": 1661951748615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.383843118450972,
            "unit": "iter/sec",
            "range": "stddev: 0.24302470118476535",
            "extra": "mean: 2.605231022600003 sec\nrounds: 5"
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
          "id": "4dbb4ad23a375e5481b8a2300dac2434cb54a3a6",
          "message": "Add additional benchmarks",
          "timestamp": "2022-08-31T15:36:06+01:00",
          "tree_id": "73706aa9ba507b45020a8915e2f1e13b866d38f6",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/4dbb4ad23a375e5481b8a2300dac2434cb54a3a6"
        },
        "date": 1661956743875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.5597488898117419,
            "unit": "iter/sec",
            "range": "stddev: 0.05221986229043067",
            "extra": "mean: 1.7865153789520263 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 4.734194366017224,
            "unit": "iter/sec",
            "range": "stddev: 0.006404501370218675",
            "extra": "mean: 211.22918128967285 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.2822719943845815,
            "unit": "iter/sec",
            "range": "stddev: 0.010149443156504448",
            "extra": "mean: 779.8657417297363 msec\nrounds: 5"
          }
        ]
      }
    ],
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
          "id": "39bd3cd2948b7bf837df4070a52174cc5bf6ca9c",
          "message": "Increase running iterations",
          "timestamp": "2022-08-31T16:01:14+01:00",
          "tree_id": "4428312af57a5b2d7926ebf8fd9d734e158e747d",
          "url": "https://github.com/ruivieira/trustyai-explainability-python/commit/39bd3cd2948b7bf837df4070a52174cc5bf6ca9c"
        },
        "date": 1661958265199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match",
            "value": 0.7916396829080582,
            "unit": "iter/sec",
            "range": "stddev: 0.018392602911241663",
            "extra": "mean: 1.2632009506225585 sec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_non_empty_input",
            "value": 6.728353204919972,
            "unit": "iter/sec",
            "range": "stddev: 0.002217022169027971",
            "extra": "mean: 148.62477779388428 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/benchmark.py::test_counterfactual_match_python_model",
            "value": 1.5912871468335548,
            "unit": "iter/sec",
            "range": "stddev: 0.009904776299913176",
            "extra": "mean: 628.4220933914185 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}