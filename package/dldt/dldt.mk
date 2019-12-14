################################################################################
#
# dldt 
#
################################################################################

DLDT_VERSION = 2019_R3.1
DLDT_SITE = https://github.com/opencv/dldt
DLDT_SITE_METHOD = git
DLDT_GIT_SUBMODULES = YES
DLDT_INSTALL_STAGING = YES
DLDT_LICENSE = Apache-2.0
DLDT_LICENSE_FILES = LICENSE
DLDT_SUPPORTS_IN_SOURCE_BUILD = NO

DLDT_CXXFLAGS = $(TARGET_CXXFLAGS)

# Basic flags
DLDT_CONF_OPTS += \
	-DCMAKE_CXX_FLAGS="$(DLDT_CXXFLAGS)" \
	-DCMAKE_BUILD_TYPE=Release \
	-DENABLE_SSE42=OFF \
	-DTHREADING=SEQ \
	-DENABLE_GNA=OFF

# Remove plugins
DLDT_CONF_OPTS += \
	-DENABLE_CLDNN=OFF \
	-DENABLE_OPENCV=OFF \
	-DENABLE_SAMPLES=OFF

# Disable tests
DLDT_CONF_OPTS += \
	-DENABLE_SEGMENTATION_TESTS=OFF \
	-DENABLE_OBJECT_DETECTION_TESTS=OFF \
	-DENABLE_PROFILING_ITT=OFF

DLDT_SUBDIR = inference-engine

$(eval $(cmake-package))
