data "archive_file" "zip_file_for_lambda_viewer_request" {
  type        = "zip"
  source_file = "function/viewer-request.js"
  output_path = "function/viewer-request.zip"
}

data "archive_file" "zip_file_for_lambda_origin_request" {
  type        = "zip"
  source_file = "function/origin-request.js"
  output_path = "function/origin-request.zip"
}

data "archive_file" "zip_file_for_lambda_origin_response" {
  type        = "zip"
  source_file = "function/origin-response.js"
  output_path = "function/origin-response.zip"
}