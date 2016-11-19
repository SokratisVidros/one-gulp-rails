rev_manifest_path = 'public/assets/rev-manifest.json'
REV_MANIFEST = JSON.parse(File.read(rev_manifest_path)) if File.exist?(rev_manifest_path)
